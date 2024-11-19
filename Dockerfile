# Use the official Bun image
FROM oven/bun:1

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the entire project to the container
COPY . .

# Install dependencies using Bun
RUN bun install

# Build the app
RUN bun run build

# Expose the default port for the Vite preview server
EXPOSE 4173

# Serve the production build locally using Vite preview
CMD ["bun", "run", "preview"]
