# springboot-kubernetes-youtube-series
Code for "SpringBoot + Kubernetes Tutorial" YouTube Series https://www.youtube.com/playlist?list=PLuNxlOYbv61h66_QlcjCEkVAj6RdeplJJ

## How to run?

```shell
$ git clone https://github.com/sivaprasadreddy/springboot-kubernetes-youtube-series.git
$ cd springboot-kubernetes-youtube-series
$ ./run.sh start
$ ./run.sh stop

$ ./run.sh start_infra
$ ./run.sh stop_infra
```

* To start only dependent services

```shell
$ ./run.sh start_infra
$ ./run.sh stop_infra
```