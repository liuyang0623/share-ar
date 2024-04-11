FROM nginx

RUN echo 'Asia/Shanghai' >/etc/timezone
RUN mkdir -p /usr/share/nginx/html
RUN rm /usr/share/nginx/html/index.html
COPY dist/ /usr/share/nginx/html