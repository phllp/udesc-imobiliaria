<template>
    <main>
        <div class="container">
            <div class="my-3">
                <a href="/catalog" class="btn">Voltar</a>
            </div>
            <h1 class="display-2 border-start border-3 ps-3 border-dark text-primary mb-5">Duplex - Ponto Chic
            </h1>

            <div class="row g-5">
                <div class="col-md-6">
                    <div id="carouserIndicators" class="carousel slide border border-primary border-3 shadow-lg">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouserIndicators" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouserIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouserIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouserIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active ">
                                <img src="@/assets/catalog/casa-03.jpg" class="d-block w-100 caroussel-item-1" alt="...">
                            </div>
                            <div class="carousel-item ">
                                <img src="@/assets/catalog/ambientes/ambiente-01.jpg" class="d-block w-100 caroussel-item-1"
                                    alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/catalog/ambientes/ambiente-02.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/catalog/ambientes/ambiente-03.jpg" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouserIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouserIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-6 d-flex flex-column justify-content-around">
                    <p class="fs-5"><span class="text-info">Endereço:</span> Rua Graciliano Ramos, 254, Ponto Chic</p>
                    <p class="fs-5"><span class="text-info">Descrição:</span> Duplex espaçoso com 4 quartos, 4 banheiros e 4
                        vagas de garagem. Este imóvel oferece uma distribuição inteligente de espaço em dois níveis,
                        proporcionando um ambiente confortável e funcional para toda a família. No primeiro andar,
                        encontra-se uma ampla sala de estar, uma cozinha moderna e bem equipada, além de um banheiro. No
                        segundo andar, há os 4 quartos, oferecendo privacidade e conforto para todos os moradores,
                        juntamente com 3 banheiros adicionais. O duplex também conta com 4 vagas de garagem, garantindo
                        praticidade e segurança para os veículos. É uma excelente opção para aqueles que desejam um imóvel
                        espaçoso, versátil e com espaço de sobra para acomodar a família e receber visitantes..</p>

                    <h2><span class="badge badge-lg rounded-pill text-bg-secondary">R$ 666.000,00</span></h2>
                </div>
            </div>



        </div>
    </main>
</template>


<script>
export default {
    name: 'ThirdProduct'
}
</script>