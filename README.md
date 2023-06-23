# Fare Reviews

Detailed and short reviews about foods and drinks all around the world.

## See Reviews
Here you can scroll and see all of the reviews. You can click on the more info button if you want to learn more about it. 

## Comment
On the review pages there is also a place to comment and tell your own opinion. 




## API Reference

#### Get Reviews

```http
GET
  https://apex.oracle.com/pls/apex/rupinika/food/get
```

#### Get Comments

```http
  GET https://apex.oracle.com/pls/apex/rupinika/post/get_comments
```
#### Send Review

```http
  POST https://apex.oracle.com/pls/apex/rupinika/post/add_comment
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`| `string` | **Required**. Username            |
| `speed`   | `string` | **Required**. Top Speed           |

## Contributing

Contributions are always welcome!

## Mentor

- [@visheshpandey](https://github.com/Vishesh-Pandey)

