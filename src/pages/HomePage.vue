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
                    <div class="col-md-8 m-0 p-0 bg-secondary">
                        <div class="py-5 px-5 ms-5">
                            <h2 class="display-3 border-start border-3 ps-3">Não perca nenhuma novidade</h2>
                            <p class="muted w-50 mt-5">Assinando a nossa newsletter você é informado das novidades da Pink
                                Azul no momento em que elas acontecem.</p>
                            <button class="btn btn-dark btn-lg" data-bs-toggle="modal" data-bs-target="#reg-modal">Assinar
                                Newsletter</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="reg-modal" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">Fique por dentro das novidades da Pink Azul</h5>
                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div class="modal-body d-flex flex-column align-items-center">
                            <img src="../assets/dog.gif" class="w-50 mb-4 shadow-lg">
                            <p class="text-center lead">Novos imóveis, ofertas e oportunidades, tudo isso e muito mais direto no seu email!</p>
                            <label for="modal-email" class="form-label muted">Seu endereço de email:</label>
                            <input type="email" class="form-control" id="modal-email" placeholder="seu.email@mail.com">
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-primary text-light" type="submit">Cadastrar</button>
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
}
</style>