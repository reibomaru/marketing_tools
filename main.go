package main

import (
	"net/http"
	"os"
)

func main() {
	dir, _ := os.Getwd()
	http.Handle("/wasm/", http.FileServer(http.Dir(dir+"/wasm/")))
	http.Handle("/", http.FileServer(http.Dir(dir+"/uu-calc/")))
	http.ListenAndServe(":8080", nil)
}
