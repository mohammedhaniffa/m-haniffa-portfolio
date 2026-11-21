# M. Haniffa — Portfolio + Project Manager

A light, editorial portfolio website with a Sanity-powered content manager. Add, edit, reorder, feature, publish and unpublish projects through the private Sanity Studio at `/studio`; the public website updates automatically (revalidated every 60 seconds).

## What's included
- Public home page, all-projects index and individual project pages.
- Sanity CMS schema for project title, URL, category, year, location, summary, rich-text description, cover image, image gallery, featured flag and sort order.
- Embedded Sanity Studio at `/studio`. Visitors do not get CMS access merely by visiting this URL: they must authenticate with an account authorized for your Sanity project.
- Responsive layout for desktop and mobile.

## Setup overview
1. Create a free Sanity account at https://www.sanity.io/ and create a project named `M. Haniffa Portfolio` with dataset `production`.
2. Copy the project ID from Sanity Manage.
3. In this folder, copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID=your actual project id`
   - `NEXT_PUBLIC_SANITY_DATASET=production`
4. Run `npm install`, then `npm run dev` and open http://localhost:3000.
5. Open http://localhost:3000/studio, sign in to Sanity, and add your first project. Use the `Project` document type. Add a cover image and optional gallery images, then publish.
6. Push this folder to your GitHub repository and deploy it using a host whose plan and terms fit your intended professional/commercial use. Add the same environment variables in the host's project settings.

## Deploying
For Vercel, import the GitHub repository and add the three environment variables above. Important: Vercel Hobby is for personal, non-commercial use. Because this portfolio advertises professional services, check Vercel's current plan terms before using Hobby; a commercial plan or a different host may be required. Never enter payment details or enable a paid plan unless you choose to.

## Before publishing
- Replace the placeholder email `hello@mhaniffa.com` in `app/page.tsx` with your real contact email.
- Add your real project images and project descriptions in Sanity Studio.
- Add your real Instagram/WhatsApp links if you want them shown; no contact details have been invented.

## Notes
- Sanity Studio is an admin interface, not a custom username/password form. Sanity handles authentication and project permissions.
- The public site reads published documents from the Sanity dataset. Keep the dataset public for this no-token starter configuration; never put a private API token in browser-exposed variables.
- This starter does not charge you. Hosting, CMS usage and storage remain subject to each provider's current free-plan limits and terms.
