FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the content from /browser directory
COPY dist/marketplace/browser/ /usr/share/nginx/html/

# Copy custom nginx config
COPY nginx-landing-portal-local.conf /etc/nginx/nginx.conf

EXPOSE 8070

CMD ["nginx", "-g", "daemon off;"]