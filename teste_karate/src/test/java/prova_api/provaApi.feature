Feature: Testando APIs GoRest e PokéAPI

Background: Executa antes de cada teste
    * def url_base_pk = "https://pokeapi.co/api/v2"
    * def url_base_go = "https://gorest.co.in/public/v2"
    
Scenario: Testando se o pokémon Magmar segura algum item
    Given url url_base_pk
    And path "pokemon/magmar"
    When method get
    Then status 200
    And match response.name == "magmar"
    And match response contains {held_items: '#notnull'}

Scenario: Testando se o pokémon Geodude é do tipo pedra
    Given url url_base_pk
    And path "pokemon/geodude"
    When method get
    Then status 200
    And match response.name == "geodude"
    And match response.types[*].type.name contains "rock"

Scenario: Testando se o pokémon de ID = 50 possui habitat de caverna
    Given url url_base_pk
    And path "pokemon-species/50"
    When method get
    Then status 200
    And match response.id == 50
    And match response.habitat.name == "cave"

Scenario: Testando se há item de bolso de ID = 10
    Given url url_base_pk
    And path "item-pocket/10"
    When method get
    Then status 404
    And match response == "Not Found"

Scenario: Criando User
    Given url url_base_go
    And path "users/"
    And request {name:"Test User","email": 'testePV@mail.QA.com',"gender":"male","status":"inactive"}
    And header Authorization = 'Bearer ' + "36b3380744936f22c4bcd335936b977e10be3ab44d4d7260e01ce27dd7563e84"
    When method post
    Then status 201