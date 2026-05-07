# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Profile photo

Add your profile photo to `public/images/`, then update `personal.profileImage` in `src/data/siteContent.json`.

Example:

```json
"profileImage": "/images/profile.jpg"
```

Public files are served from the site root, so `public/images/profile.jpg` becomes `/images/profile.jpg`.

## Netlify

This project includes `netlify.toml` with:

- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `22`
