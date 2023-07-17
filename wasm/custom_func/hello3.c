#include <stdio.h>
#ifdef __EMSCRIPTEN__
#include <emscripten/emscripten.h>
#else
#define EMSCRIPTEN_KEEPALIVE
#endif

int main() {
    printf("Hello World\n");
}

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

EXTERN EMSCRIPTEN_KEEPALIVE void myFunction(int argc, char ** argv) {
    printf("MyFunction Called\n");
}
