package org.happycamp.rest;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;

@Path("/public")
public class PublicResource {
    @GET
    public String access_public(){
        return "This is public";
    }

    @POST()
    @Path("/post")
    public void post(){
    }
}
