package main

import (
	"github.com/gin-gonic/gin"
	"github.com/vijayakumar-harish/golang-rest-api/db"
	"github.com/vijayakumar-harish/golang-rest-api/routes"
	
)

func main() {
	db.InitDB()
	server := gin.Default()

	routes.RegisterRoutes(server)
	
	server.Run(":8888") // localhost:8888
}

