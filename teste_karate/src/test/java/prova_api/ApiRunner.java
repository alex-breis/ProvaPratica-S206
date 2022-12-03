package prova_api;

import com.intuit.karate.junit5.Karate;

class ApiRunner {
    
    @Karate.Test
    Karate testAPI() {
        return Karate.run("provaApi").relativeTo(getClass());
    }    

}