import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mvzjqpor');

  if (state.succeeded) {
    return (
      <div className="flex flex-col gap-3 py-10">
        <p className="font-heading italic font-bold text-3xl text-(--primary)">Message sent!</p>
        <p className="text-(--foreground)">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-smallcaps font-bold tracking-[0.08em]">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="field"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-smallcaps font-bold tracking-[0.08em]">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="field"
        />
        <ValidationError
          field="email"
          prefix="Email"
          errors={state.errors}
          className="text-sm italic text-(--error)"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-smallcaps font-bold tracking-[0.08em]">
          Tell me about a project you're interested in
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you working on? What do you need help with?"
          className="field resize-none"
        />
        <ValidationError
          field="message"
          prefix="Message"
          errors={state.errors}
          className="text-sm italic text-(--error)"
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
