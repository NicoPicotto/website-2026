import { useForm } from '@formspree/react';

// Our own wording for Formspree's errors (instead of <ValidationError>,
// which composes "<prefix> <Formspree message>").
const fieldMessages = {
  email: 'Kindly provide a valid email address.',
  message: 'Kindly write a few words before sending.',
} as const;

const formMessage =
  'Your message could not be sent. Kindly try again in a moment.';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mvzjqpor');

  const hasFieldError = (field: keyof typeof fieldMessages) =>
    (state.errors?.getFieldErrors(field).length ?? 0) > 0;
  const hasFormError = (state.errors?.getFormErrors().length ?? 0) > 0;

  if (state.succeeded) {
    return (
      <div className="flex flex-col gap-3 py-10" role="status">
        <p className="font-heading italic font-bold text-3xl text-(--primary)">
          Your message has been received.
        </p>
        <p className="text-(--foreground)">
          Thank you for writing. I shall reply at my earliest convenience.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-smallcaps font-bold tracking-[0.08em]">
          Your name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="How you wish to be addressed"
          className="field"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-smallcaps font-bold tracking-[0.08em]">
          Your email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          aria-invalid={hasFieldError('email') || undefined}
          aria-describedby={hasFieldError('email') ? 'email-error' : undefined}
          className="field"
        />
        {hasFieldError('email') && (
          <p id="email-error" role="alert" className="text-sm italic text-(--error)">
            {fieldMessages.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-smallcaps font-bold tracking-[0.08em]">
          Tell me of the project you have in mind
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you working on, and how might I be of service?"
          aria-invalid={hasFieldError('message') || undefined}
          aria-describedby={hasFieldError('message') ? 'message-error' : undefined}
          className="field resize-none"
        />
        {hasFieldError('message') && (
          <p id="message-error" role="alert" className="text-sm italic text-(--error)">
            {fieldMessages.message}
          </p>
        )}
      </div>

      {hasFormError && (
        <p role="alert" className="text-sm italic text-(--error)">
          {formMessage}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary self-start disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Sending your message…' : 'Send your message'}
      </button>
    </form>
  );
}
