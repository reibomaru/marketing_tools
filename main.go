package main

import (
	"net/http"
	"os"
)

func main() {
	dir, _ := os.Getwd()
	http.Handle("/", http.FileServer(http.Dir(dir+"/wasm/")))
	http.ListenAndServe(":8080", nil)
}
