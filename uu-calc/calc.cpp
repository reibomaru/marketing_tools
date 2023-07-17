#include <math.h>
#ifdef __EMSCRIPTEN__
#include <emscripten/emscripten.h>
#else
#define EMSCRIPTEN_KEEPALIVE
#endif

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

EXTERN EMSCRIPTEN_KEEPALIVE double uuOpenRate2OpenRate(double uu_open_rate, int count_of_delivery){
    double x = 1 - uu_open_rate;
    return 1 - pow(x, (double)1 / (double)count_of_delivery);
}

EXTERN EMSCRIPTEN_KEEPALIVE double openRate2UuOpenRate(double open_rate, int count_of_delibery){
    return 1 - pow((1 - open_rate), count_of_delibery);
}