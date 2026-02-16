module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'strapi-provider-email-resend', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
        providerOptions: {
          apiKey: env('RESEND_API_KEY'),
        },
        settings: {
            defaultFrom: 'onboarding@resend.dev',
            defaultReplyTo: 'onboarding@resend.dev',
        },
      },
    },
    // ...
  });
