package main

import (
	"github.com/gin-gonic/gin"
	"github.com/vijayakumar-harish/golang-rest-api/db"
	"github.com/vijayakumar-harish/golang-rest-api/routes"
	"github.com/gin-contrib/cors"
	"time"
)

func main() {
	db.InitDB()
	server := gin.Default()

	server.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:5173"},
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
        MaxAge:           12 * time.Hour,
    }))
	routes.RegisterRoutes(server)
	
	server.Run(":8888") // localhost:8888
}

