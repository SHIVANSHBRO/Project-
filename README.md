## Oriental Furnishing Works

A modern e-commerce website for vintage furniture and home decor.

### Prerequisites

- Node.js >= 18.0.0
- MongoDB

### Environment Variables

Create a `.env` file in the root directory with:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/oriental-furnishing-works.git
cd oriental-furnishing-works
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. For production build:
```bash
npm run build
npm start
```

### AWS Elastic Beanstalk Deployment

1. Initialize Elastic Beanstalk application:
```bash
eb init -p node.js oriental-furnishing-works
```

2. Create environment:
```bash
eb create production
```

3. Deploy:
```bash
eb deploy
```

### Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── server/        # Express server files
│   │   ├── models/    # MongoDB models
│   │   ├── db.ts     # Database connection
│   │   └── server.ts # Express app
│   └── main.tsx      # Entry point
├── .ebextensions/     # AWS configuration
├── public/           # Static assets
└── package.json
```