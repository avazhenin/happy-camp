package org.happycamp.rest;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/admin")
public class AdminResource {

    @GET
    public String root(){
        return "I'm admin";
    }
}
