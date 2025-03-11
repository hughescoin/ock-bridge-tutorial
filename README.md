# OnchainKit Bridge Component Demo App

This repository contains a demo application showcasing the Bridge Component from Coinbase's [OnchainKit]. The application allows users to bridge tokens between Base and the Blocklords Appchainusing a clean, responsive interface.

[Appchains] are for projects seeking scale at low cost through dedicated blockspace, with customizable gas tokens and permissions.

## Features

- Connect wallet functionality using OnchainKit
- Token bridging between networks
- Responsive design that works on mobile and desktop

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/hughescoin/ock-bridge-tutorial.git
```

### 2. Navigate to the project directory

```bash
cd ock-bridge-tutorial
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [OnchainKit](https://onchainkit.xyz/) - Coinbase's onchain component library
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

## Project Structure

- `/app` - Next.js application pages and components
- `/app/bridge` - Bridge page implementation
- `/app/svg` - SVG components used in the UI

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project is based on the OnchainKit Bridge Component guide from [Base.org](https://base.org)

---

[OnchainKit]: https://onchainkit.xyz/
[Appchains]: https://docs.cdp.coinbase.com/appchains/docs/welcome
