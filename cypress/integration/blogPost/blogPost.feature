Feature: Show blog post

  As a user I want to be able to see the blog post
  So that, I can get the information from the blog

  Scenario: Show blog post one
    Given the user has browsed to the home page
    When the user opens the blog post number 1
    Then the user should see the blog post "blog-post-1"
    And the content of blog post should be "Hello world"

  Scenario: Show blog post two
    Given the user has browsed to the home page
    When the user opens the blog post number 2
    Then the user should see the blog post "blog-post-2"
    And the content of blog post should be "Emphasis, aka italics,"

  Scenario: Show blog post three
    Given the user has browsed to the home page
    When the user opens the blog post number 3
    Then the user should see the blog post "blog-post-3"
    And the content of blog post should be an image

  Scenario: Show blog post four
    Given the user has browsed to the home page
    When the user opens the blog post number 4
    Then the user should see the blog post "blog-post-4"
    And the content of blog post should be "My blog post 4"