# Quick Setup Locally

> [!NOTE]  
> This project uses [pnpm](https://pnpm.io/) only as a package manager.

> Install the Dependencies

```
cd OASIS-MAIN
pnpm install
```

> Setup redis using docker

> [!NOTE]  
> local db is not supported as [Prisma accelerate](https://www.prisma.io/accelerate) will not work with local db

For Windows users

```
copy .env.example .env

now, write the required secrets and URLs in .env

pnpm prisma migrate dev
pnpm prisma db seed
```

For Mac/Linux users

```
cp .env.example .env

now, write the required secrets and URLs in .env

pnpm prisma migrate dev
pnpm prisma db seed
```

> Run locally

```
pnpm dev
```
