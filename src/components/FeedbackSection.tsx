"use client";

import { useRef, useState, type FormEvent } from "react";
import { useLanguage, whatsappUrl } from "./LanguageContext";

type FieldErrors = {
  rating?: boolean;
  name?: boolean;
  feedback?: boolean;
};

export function FeedbackSection() {
  const { t } = useLanguage();
  const [rating, setRating] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempted, setAttempted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [fallbackHref, setFallbackHref] = useState("");
  const ratingGroupRef = useRef<HTMLFieldSetElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null);

  function validate(nextRating = rating, nextName = name, nextFeedback = feedback): FieldErrors {
    return {
      rating: nextRating === null,
      name: nextName.length > 80,
      feedback: nextFeedback.trim().length === 0 || nextFeedback.length > 1000,
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);

    const nextErrors = validate();
    setErrors(nextErrors);

    if (nextErrors.rating) {
      ratingGroupRef.current?.querySelector<HTMLInputElement>("input")?.focus();
      return;
    }
    if (nextErrors.name) {
      nameInputRef.current?.focus();
      return;
    }
    if (nextErrors.feedback) {
      feedbackInputRef.current?.focus();
      return;
    }

    const message = [
      t.feedbackMessageTitle,
      `${t.feedbackMessageRating}: ${rating}/5`,
      ...(name.trim() ? [`${t.feedbackMessageName}: ${name.trim()}`] : []),
      `${t.feedbackMessageText}:`,
      feedback.trim(),
    ].join("\n\n");
    const href = whatsappUrl(message);

    setFallbackHref("");
    let popup: Window | null = null;
    try {
      if (typeof window.open === "function") popup = window.open(href, "_blank");
    } catch {
      popup = null;
    }
    if (popup) {
      popup.opener = null;
    } else {
      setFallbackHref(href);
    }
  }

  function handleRatingChange(value: number) {
    setRating(value);
    if (attempted) setErrors(validate(value, name, feedback));
  }

  function handleNameChange(value: string) {
    setName(value);
    if (attempted) setErrors(validate(rating, value, feedback));
  }

  function handleFeedbackChange(value: string) {
    setFeedback(value);
    if (attempted) setErrors(validate(rating, name, value));
  }

  const showRatingError = attempted && errors.rating;
  const showNameError = attempted && errors.name;
  const showFeedbackError = attempted && errors.feedback;

  return (
    <section className="feedback-section section-block" aria-labelledby="feedback-title">
      <div className="content-width">
        <div className="feedback-card">
          <div className="feedback-heading">
            <p className="eyebrow">{t.feedbackEyebrow}</p>
            <h2 id="feedback-title">{t.feedbackTitle}</h2>
            <p>{t.feedbackBody}</p>
          </div>

          <form className="feedback-form" noValidate onSubmit={handleSubmit}>
            <fieldset
              className="feedback-rating-group"
              ref={ratingGroupRef}
              aria-describedby={showRatingError ? "feedback-rating-error" : undefined}
            >
              <legend>{t.feedbackRatingLabel}</legend>
              <div className="feedback-stars">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label className="feedback-star-option" key={value}>
                    <input
                      type="radio"
                      name="feedback-rating"
                      value={value}
                      checked={rating === value}
                      required
                      onChange={() => handleRatingChange(value)}
                    />
                    <span aria-hidden="true" className={rating !== null && value <= rating ? "is-selected" : ""}>★</span>
                    <span className="visually-hidden">{t.feedbackRatingOption.replace("{rating}", String(value))}</span>
                  </label>
                ))}
              </div>
              {showRatingError && <p className="feedback-error" id="feedback-rating-error">{t.feedbackRatingError}</p>}
            </fieldset>

            <div className="feedback-field">
              <label htmlFor="feedback-name">{t.feedbackNameLabel}</label>
              <input
                id="feedback-name"
                ref={nameInputRef}
                type="text"
                value={name}
                maxLength={80}
                autoComplete="name"
                aria-invalid={Boolean(showNameError)}
                aria-describedby={`feedback-name-help${showNameError ? " feedback-name-error" : ""}`}
                onChange={(event) => handleNameChange(event.target.value)}
              />
              <p className="feedback-help" id="feedback-name-help">{t.feedbackNameHelp}</p>
              {showNameError && <p className="feedback-error" id="feedback-name-error">{t.feedbackNameError}</p>}
            </div>

            <div className="feedback-field feedback-text-field">
              <label htmlFor="feedback-message">{t.feedbackTextLabel}</label>
              <textarea
                id="feedback-message"
                ref={feedbackInputRef}
                value={feedback}
                maxLength={1000}
                rows={4}
                required
                aria-invalid={Boolean(showFeedbackError)}
                aria-describedby={`feedback-text-help feedback-character-count${showFeedbackError ? " feedback-text-error" : ""}`}
                onChange={(event) => handleFeedbackChange(event.target.value)}
              />
              <div className="feedback-meta">
                <p className="feedback-help" id="feedback-text-help">{t.feedbackTextHelp}</p>
                <p className="feedback-help" id="feedback-character-count" aria-live="polite">{t.feedbackCharacterCount.replace("{count}", String(feedback.length))}</p>
              </div>
              {showFeedbackError && <p className="feedback-error" id="feedback-text-error">{t.feedbackTextError}</p>}
            </div>

            <div className="feedback-submit-area">
              <button className="button button-green feedback-submit" type="submit" aria-describedby="feedback-whatsapp-note">{t.feedbackSubmit}</button>
              <p className="feedback-help" id="feedback-whatsapp-note">{t.feedbackWhatsappNote}</p>
              {fallbackHref && (
                <p className="feedback-fallback" role="status">
                  {t.feedbackPopupFallback} <a href={fallbackHref} target="_blank" rel="noopener noreferrer">{t.feedbackOpenWhatsApp}</a>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
