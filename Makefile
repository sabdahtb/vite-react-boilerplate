# Variables
DOCKER_IMAGE = react-vite-app
DOCKER_CONTAINER = react-vite-app-container
PORT = 4173

# Build the Docker image
build:
	docker build -t $(DOCKER_IMAGE) .

# Run the container
run:
	docker run -p $(PORT):$(PORT) --env-file .env --name $(DOCKER_CONTAINER) $(DOCKER_IMAGE)

# Stop the container
stop:
	docker stop $(DOCKER_CONTAINER) || true
	docker rm $(DOCKER_CONTAINER) || true

# Rebuild the image (clean build)
rebuild: stop
	docker build --no-cache -t $(DOCKER_IMAGE) .

# Access the running container (for debugging)
exec:
	docker exec -it $(DOCKER_CONTAINER) sh

# Clean up Docker (remove image and container)
clean: stop
	docker rmi $(DOCKER_IMAGE) || true
