import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mvzjqpor');

  if (state.succeeded) {
    return (
      <div className="flex flex-col gap-3 py-10">
        <p className="font-heading text-xl font-semibold">Message sent!</p>
        <p className="text-sm text-(--foreground)">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="bg-(--card) border border-(--border) px-4 py-2.5 text-sm placeholder:text-(--muted-foreground) focus:outline-none focus:border-(--primary) transition-colors"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="bg-(--card) border border-(--border) px-4 py-2.5 text-sm placeholder:text-(--muted-foreground) focus:outline-none focus:border-(--primary) transition-colors"
        />
        <ValidationError
          field="email"
          prefix="Email"
          errors={state.errors}
          className="text-xs text-(--error)"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Tell me about a project you're interested in
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you working on? What do you need help with?"
          className="bg-(--card) border border-(--border) px-4 py-2.5 text-sm placeholder:text-(--muted-foreground) focus:outline-none focus:border-(--primary) transition-colors resize-none"
        />
        <ValidationError
          field="message"
          prefix="Message"
          errors={state.errors}
          className="text-xs text-(--error)"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary self-start disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
