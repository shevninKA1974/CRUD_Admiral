package ru.kshevnin.controller;

import lombok.Getter;
import lombok.Setter;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class DefaultAdvice {


    @ExceptionHandler(Exception.class)
    public ResponseEntity<Response> handleException(Exception e) {
        Response response = new Response(e.getMessage());
        if (e instanceof DataIntegrityViolationException)  {
            response.setMessage(e.getCause().getCause().getMessage());
        }
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        //return new ResponseEntity<>(response, HttpStatus.OK);
    }

}

class Response {

    @Getter @Setter
    private String message;

    public Response() {}

    public Response(String message) {
        this.message = message;
    }


}