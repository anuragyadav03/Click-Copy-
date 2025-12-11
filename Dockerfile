# Lightweight NGINX image for static websites
FROM nginx:alpine

# NGINX default static files folder
WORKDIR /usr/share/nginx/html

# Purane default NGINX files hata do
RUN rm -rf ./*

# Apni HTML, CSS, JS copy karo
COPY . .

# NGINX 80 port pe sunta hai
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
