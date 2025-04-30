import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)
//resend.domains.create({ name: 'gmail.com' })

export default defineEventHandler(async (event) => {

  const body = await readBody(event); // Read the request body
  
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use the email from the request body
      to: ['medicoopipsltda2@gmail.com'], // Use the email from the request body
      subject: "¡URGENTE¡ Mensaje desde pagina web",
      html: `<h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${body.name}</p>
      <p><strong>Teléfono:</strong> ${body.phone}</p>
      <p><strong>Correo:</strong> ${body.mail}</p>
      <p><strong>Mensaje:</strong> ${body.message}</p>`
    });
    
    return { status: 'success', message: 'Mensaje enviado!', data};

  } catch (error) {
    return { error };
  }
});