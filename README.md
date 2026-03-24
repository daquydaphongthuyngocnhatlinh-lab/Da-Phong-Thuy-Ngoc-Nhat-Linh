# Đá Phong Thủy Ngọc Nhất Linh

A modern React e-commerce website for feng shui gemstones and jewelry, built with Vite, TypeScript, and Supabase.

## 🚀 Features

- **Modern React 18** with TypeScript
- **Responsive Design** with Tailwind CSS
- **Supabase Backend** for products, blog, and contact forms
- **React Router v7** for client-side routing
- **Motion Animations** for smooth UX
- **Vercel Analytics** for performance tracking
- **SEO Optimized** with proper meta tags

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS v4
- **Backend:** Supabase (PostgreSQL)
- **Routing:** React Router DOM v7
- **Animations:** Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/daquydaphongthuyngocnhatlinh-lab/Da-Phong-Thuy-Ngoc-Nhat-Linh.git
   cd Da-Phong-Thuy-Ngoc-Nhat-Linh
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Supabase credentials.

4. **Set up Supabase database**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Create a new project or use existing
   - Run the SQL script from `supabase-setup.sql` in SQL Editor
   - Update `.env.local` with your project URL and anon key

5. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3006](http://localhost:3006)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Add environment variables** in Vercel Dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

3. **Deploy**
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── service/       # API services (Supabase)
├── types/         # TypeScript type definitions
├── context/       # React context providers
├── hooks/         # Custom React hooks
└── utils/         # Utility functions
```

## 🗄️ Database Schema

### Products Table
- `id` (uuid, primary key)
- `name` (text)
- `description` (text)
- `price` (integer)
- `image_url` (text)
- `category` (text)
- `menh` (text) - Five elements
- `specs` (jsonb) - Product specifications
- `meaning` (text) - Feng shui meaning

### Posts Table (Blog)
- `id` (uuid, primary key)
- `title` (text)
- `slug` (text, unique)
- `content` (text)
- `author` (text)
- `image_url` (text)
- `category` (text)

### Contacts Table
- `id` (uuid, primary key)
- `name` (text)
- `email` (text)
- `phone` (text)
- `message` (text)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run TypeScript type checking
- `npm run clean` - Clean build directory

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Supabase project URL | Yes |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

For business inquiries: contact@ngocnhatlinh.com
