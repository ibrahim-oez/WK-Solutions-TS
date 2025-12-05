import { useState, useEffect } from "react";
import { 
  Eye, 
  EyeOff, 
  CheckCircle, 
  XCircle, 
  Star, 
  User, 
  Clock, 
  Link as LinkIcon,
  Copy,
  RefreshCw,
  Trash2
} from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

// Admin-Token aus Umgebungsvariablen (in Produktion sollte das über eine richtige Authentifizierung laufen)
const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_PASSWORD || "admin-secret-2024"; // TODO: Implement proper authentication

export function FeedbackAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminToken, setAdminToken] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllFeedbacks();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminToken === ADMIN_TOKEN) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Ungültiger Admin-Token");
    }
  };

  const fetchAllFeedbacks = async () => {
    setLoading(true);
    try {
      // Da wir noch keinen Admin-Endpoint haben, simulieren wir das
      // In der echten Implementierung würden wir einen geschützten Endpoint verwenden
      const response = await fetch(`${API_BASE_URL}/api/feedbacks`);
      if (response.ok) {
        const approvedFeedbacks = await response.json();
        // Für Demo-Zwecke zeigen wir nur die approved feedbacks
        // In Produktion bräuchten wir einen separaten Admin-Endpoint
        setFeedbacks(approvedFeedbacks.map(f => ({ ...f, approved: true })));
      }
    } catch (err) {
      setError("Fehler beim Laden der Feedbacks");
    } finally {
      setLoading(false);
    }
  };

  const generateFeedbackLink = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/generate-link`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      
      if (response.ok) {
        const data = await response.json();
        setGeneratedLink(data.link);
      } else {
        setError("Fehler beim Generieren des Links");
      }
    } catch (err) {
      setError("Verbindungsfehler");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Hier könnten Sie eine Toast-Benachrichtigung hinzufügen
  };

  const approveFeedback = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/approve/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

      if (response.ok) {
        setFeedbacks(prev => 
          prev.map(f => f.id === id ? { ...f, approved: true } : f)
        );
      } else {
        setError("Fehler beim Freigeben des Feedbacks");
      }
    } catch (err) {
      setError("Verbindungsfehler");
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Admin Login
            </h2>
            <p className="text-gray-600">
              Feedback-Verwaltung
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Admin Token
              </label>
              <input
                type="password"
                value={adminToken}
                onChange={(e) => setAdminToken(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Admin-Token eingeben"
                required
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Anmelden
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Feedback-Verwaltung
              </h1>
              <p className="text-gray-600">
                Verwalten Sie Kundenfeedbacks und generieren Sie neue Links
              </p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Abmelden
            </button>
          </div>
        </div>

        {/* Link Generator */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Feedback-Link generieren
          </h2>
          
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={generateFeedbackLink}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center space-x-2"
            >
              <LinkIcon className="w-5 h-5" />
              <span>Neuen Link generieren</span>
            </button>
          </div>

          {generatedLink && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <label className="block text-sm font-semibold text-blue-900 mb-2">
                Generierter Feedback-Link:
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 p-2 border border-blue-300 rounded bg-white text-sm"
                />
                <button
                  onClick={() => copyToClipboard(generatedLink)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center space-x-1"
                >
                  <Copy className="w-4 h-4" />
                  <span>Kopieren</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Feedbacks */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Feedbacks ({feedbacks.length})
            </h2>
            <button
              onClick={fetchAllFeedbacks}
              disabled={loading}
              className="text-blue-600 hover:text-blue-800 transition-colors flex items-center space-x-1"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Aktualisieren</span>
            </button>
          </div>

          {error && (
            <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : feedbacks.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Keine Feedbacks vorhanden</p>
            </div>
          ) : (
            <div className="space-y-4">
              {feedbacks.map((feedback) => (
                <div
                  key={feedback.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        {renderStars(feedback.rating)}
                        <span className="text-sm font-medium text-gray-700 ml-2">
                          {feedback.rating}/5
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{feedback.name}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{formatDate(feedback.createdAt)}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {feedback.approved ? (
                        <span className="flex items-center space-x-1 text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>Freigegeben</span>
                        </span>
                      ) : (
                        <button
                          onClick={() => approveFeedback(feedback.id)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors flex items-center space-x-1"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Freigeben</span>
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                    "{feedback.text}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}