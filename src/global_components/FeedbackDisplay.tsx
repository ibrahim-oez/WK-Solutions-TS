import React, { useState, useEffect } from "react";
import { Star, User, Clock, Quote } from "lucide-react";

interface Feedback {
  id: string;
  name: string;
  text: string;
  rating: number;
  createdAt: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export const FeedbackDisplay: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async (): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/feedbacks`);
      if (response.ok) {
        const data: Feedback[] = await response.json();
        setFeedbacks(data);
      } else {
        setError("Feedbacks konnten nicht geladen werden");
      }
    } catch (err) {
      setError("Verbindungsfehler");
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number): React.ReactNode => {
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

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" />
        <p className="text-gray-600 mt-4">Lade Feedbacks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <div className="text-center py-8">
        <Quote className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Noch keine Feedbacks
        </h3>
        <p className="text-gray-600">
          Seien Sie der Erste, der ein Feedback hinterlässt!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Was unsere Kunden sagen
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                {renderStars(feedback.rating)}
              </div>
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-gray-700">
                  {feedback.rating}/5
                </span>
              </div>
            </div>

            <Quote className="w-8 h-8 text-blue-500 opacity-50 mb-3" />

            <p className="text-gray-700 mb-6 leading-relaxed">
              "{feedback.text}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {feedback.name}
                  </p>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">
                      {formatDate(feedback.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {feedbacks.length > 0 && (
        <div className="text-center pt-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Haben Sie auch positive Erfahrungen gemacht?
            </h3>
            <p className="text-gray-600 mb-4">
              Wir würden uns sehr über Ihr Feedback freuen!
            </p>
            <p className="text-sm text-gray-500">
              Kontaktieren Sie uns für einen personalisierten Feedback-Link.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
