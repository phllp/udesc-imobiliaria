<template>
    <main>
        <section class="bg-image-1">
            <div class="container text-light">
                <div class="row  justify-content-center text-start align-items-center">
                    <div class="col-4">
                        <div class="my-5 py-5">
                            <p class="secondary display-5">Quer se mudar para Ibirama e não sabe onde morar?</p>
                            <p class="lead">Deixa com a gente</p>

                        </div>
                    </div>
                    <div class="col-6">

                        <div class="py-5 my-5">
                            <h2 class="secondary display-3">Estamos aqui para ajudar você a encontrar o lar mais próximo da
                                Udesc
                            </h2>
                            <a class="btn btn-lg btn-primary text-light mt-3" href="/catalog">Confira nossos imóveis</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="bg-image-2">
            <div class="container text-light">
                <div class="py-5">
                    <p class="secondary display-5 border-start border-4 ps-3">Por que trabalhar conosco?</p>
                </div>

                <div class="row align-items-center justify-content-center">
                    <div class="col-md">
                        <div class="d-flex flex-wrap flex-sm-row flex-column align-items-center">
                            <h1 class="display-1">20</h1>
                            <p class="display-5 p-4">anos de <br> experiência</p>
                        </div>
                        <div class="d-flex flex-wrap flex-sm-row flex-column align-items-center">
                            <h1 class="display-1">4</h1>
                            <p class="display-5 p-4">Corretores <br> dedicados</p>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="d-flex flex-wrap flex-sm-row flex-column align-items-center">
                            <h1 class="display-1">R$500</h1>
                            <p class="display-5 p-4">milhões em <br> propriedades <br> vendidas</p>
                        </div>
                        <div class="d-flex flex-wrap flex-sm-row flex-column align-items-center">
                            <h1 class="display-1">132</h1>
                            <p class="display-5 p-4">casas vendidas <br> em 2023</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>

        <section>

            <div class="container-fluid text-light">
                <div class="row">
                    <div class="col-md-8 m-0 p-0 bg-primary">
                        <div class="py-5 px-5 ms-5">
                            <h2 class="display-3 border-start border-3 ps-3">Faça uma visita</h2>
                            <p class="muted w-50 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                                impedit voluptas reprehenderit enim voluptates exercitationem asperiores magnam explicabo
                                vel ipsam! Sint unde odio tempora, fugiat perferendis at veniam eveniet doloremque! Placeat
                                facilis sunt pariatur consequatur fuga earum perferendis? Dicta itaque dolore deleniti nemo
                                sequi voluptatem amet laborum cumque dolorum fugiat.</p>

                        </div>
                    </div>
                    <div class="col-md-4 m-0 p-0">
                        <div class="bg-image-3">
                            
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 m-0 p-0">
                        <div class="bg-image-4">
                        </div>
                    </div>
                    <div class="col-md-8 m-0 p-0 bg-info">
                        <div class="py-5 px-5 ms-5">
                            <h2 class="display-3 border-start border-3 ps-3">Faça uma visita</h2>
                            <p class="muted w-50 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                                impedit voluptas reprehenderit enim voluptates exercitationem asperiores magnam explicabo
                                vel ipsam! Sint unde odio tempora, fugiat perferendis at veniam eveniet doloremque! Placeat
                                facilis sunt pariatur consequatur fuga earum perferendis? Dicta itaque dolore deleniti nemo
                                sequi voluptatem amet laborum cumque dolorum fugiat.</p>

                        </div>
                    </div>
                </div>
            </div>




        </section>
    </main>
</template>

<script>

export default {
    name: 'HomePage'
}

</script>

<style scoped>
.bg-image-4 {
    height: 100%;
    background-image: url('../assets/house-02.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.bg-image-3 {
    height: 100%;
    background-image: url('../assets/house-01.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.bg-image-1 {
    min-height: calc(100vh - 130px);
    background-image: url('../assets/bg-ambiente-01.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

.bg-image-2 {
    min-height: calc(100vh - 130px);
    background-image: url('../assets/bg-ambiente-02.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}</style>