package com.niit.bej.spotifyapigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpotifyApiGateWayApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpotifyApiGateWayApplication.class, args);
    }

    @Bean
    public RouteLocator spotifyRoutes(RouteLocatorBuilder routeLocatorBuilder) {
        return routeLocatorBuilder.routes()
                .route(p -> p.path("/userAuth/**").uri("lb://userAuthenticationService/"))
                .route(p -> p.path("/spotify/**").uri("lb://userSpotifyService"))
                .build();
    }
}
