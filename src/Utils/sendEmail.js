export const EMAIL_CONFIG = {
  SERVICE_ID: "service_jg0xghe",       
  TEMPLATE_ID: "template_yow9xna",     
  PUBLIC_KEY: "_v7TujphcFvutv-_w",       
};

export async function sendEmail(formData) {
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAIL_CONFIG;

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    mobile: formData.mobile,
    subject: formData.subject,
    message: formData.message,
  };

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  return true;
}
