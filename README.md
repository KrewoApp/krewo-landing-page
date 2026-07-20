# Krewo Landing Page

A responsive, static landing page for Krewo built with HTML, CSS, and vanilla JavaScript.

## Included

- Responsive navigation and hero section
- Interactive WhatsApp-style customer workflow
- Live dashboard simulation
- Human-approval positioning
- Industry use cases
- Demo-request lead form
- Mobile-friendly design

## Run locally

Open `index.html` directly in your browser, or use the VS Code **Live Server** extension.

## Connect the lead form to Gmail

This project uses Formspree so you do not expose Gmail credentials in the browser.

1. Create a dedicated Krewo Gmail address.
2. Create a free Formspree account using that address.
3. Create a new form in Formspree.
4. Copy the endpoint. It will look like:

   `https://formspree.io/f/abcxyzpq`

5. Open `index.html` and replace:

   `https://formspree.io/f/YOUR_FORM_ID`

   with your real Formspree endpoint.

6. Submit one test lead and confirm the address in Formspree if requested.

## Publish with Netlify

1. Push this folder to GitHub.
2. Sign in to Netlify.
3. Choose **Add new site** → **Import an existing project**.
4. Select the GitHub repository.
5. No build command is required.
6. Set the publish directory to the project root.

## Files

- `index.html` — page structure and copy
- `styles.css` — responsive styling
- `app.js` — mobile demo, dashboard updates, menu, and form submission
