import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Star, Send, CheckCircle, XCircle, User, MessageSquare } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export default function Feedback() {
  const { token } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    rating: 5
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Token Validierung
  if (!token) {
    return <Navigate to="/" replace />;
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(""); // Clear error when user starts typing
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Bitte geben Sie Ihren Namen ein");
      return false;
    }
    if (!formData.text.trim()) {
      setError("Bitte schreiben Sie ein Feedback");
      return false;
    }
    if (formData.text.trim().length < 10) {
      setError("Das Feedback sollte mindestens 10 Zeichen haben");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          name: formData.name.trim(),
          text: formData.text.trim(),
          rating: parseInt(formData.rating)
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Ein Fehler ist aufgetreten");
      }
    } catch (err) {
      setError("Verbindungsfehler. Bitte versuchen Sie es später erneut.");
    } finally {
      setLoading(false);
    }
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => handleInputChange('rating', index + 1)}
        className={`text-2xl transition-colors ${
          index < formData.rating 
            ? 'text-yellow-400 hover:text-yellow-500' 
            : 'text-gray-300 hover:text-yellow-300'
        }`}
      >
        <Star fill={index < formData.rating ? 'currentColor' : 'none'} />
      </button>
    ));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vielen Dank!
          </h2>
          <p className="text-gray-600 mb-6">
            Ihr Feedback wurde erfolgreich übermittelt und wird nach der Prüfung auf unserer Website veröffentlicht.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 text-sm">
              <strong>Name:</strong> {formData.name}<br />
            <strong>Bewertung:</strong> {formData.rating}/5 Sterne
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center">
          <MessageSquare className="w-12 h-12 mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">Ihr Feedback</h2>
          <p className="text-blue-100">
            Teilen Sie Ihre Erfahrung mit uns
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Ihr Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Wie dürfen wir Sie nennen?"
              maxLength={50}
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Bewertung ({formData.rating}/5 Sterne)
            </label>
            <div className="flex items-center space-x-1">
              {renderStars()}
              <span className="ml-3 text-gray-600 font-medium">
                {['Schlecht', 'Geht so', 'Okay', 'Gut', 'Exzellent'][formData.rating - 1]}
              </span>
            </div>
          </div>

          {/* Feedback Text */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ihr Feedback
            </label>
            <textarea
              value={formData.text}
              onChange={(e) => handleInputChange('text', e.target.value)}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Beschreiben Sie Ihre Erfahrung mit unseren Services..."
              maxLength={500}
            />
            <div className="text-right text-xs text-gray-500 mt-1">
              {formData.text.length}/500 Zeichen
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
              <XCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Wird gesendet...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Feedback senden</span>
              </>
            )}
          </button>
        </form>

        {/* Footer Info */}
        <div className="bg-gray-50 px-6 py-4 text-center">
          <p className="text-xs text-gray-600">
            Ihr Feedback wird nach einer kurzen Prüfung auf unserer Website veröffentlicht.
          </p>
        </div>
      </div>
    </div>
  );
}
