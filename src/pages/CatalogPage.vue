<template>
    <main>
        <div class="container text-primary">
            <div class="py-5 ">
               <h1 class="ms-2 border-start border-3 border-dark p-2">Imóveis em destaque</h1>
              
            </div>

            <div class="row align-items-center g-5">
                <div class="col-md">
                    <div class="card shadow-lg">
                        <img src="../assets/catalog/casa-01.jpg" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title mt-3">SOBRADO</h5>
                            <p class="card-text lead">Bela Vista</p>
                            <div class="mb-3">
                                <a href="#" class="link-underline link-underline-opacity-0 me-2">
                                    <font-awesome-icon icon="fa-bed" size="lg" /> 2 quartos
                                </a>
                                <a href="#" class="link-underline link-underline-opacity-0 me-2">
                                    <font-awesome-icon icon="shower" size="lg" /> 3 banheiros
                                </a>
                                <a href="#" class="link-underline link-underline-opacity-0">
                                    <font-awesome-icon icon="car-side" size="lg" /> 2 vagas
                                </a>
                            </div>
                            <a href="#" class="btn btn-primary text-light">Confira</a>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card shadow-lg">
                        <img src="../assets/catalog/casa-02.jpg" class="card-img-top img-fluid d-block" alt="...">
                        <div class="card-body">
                            <h5 class="card-title mt-3">CASA PARA FAMÍLIA</h5>
                            <p class="card-text lead">Dalbérgia</p>
                            <div class="mb-3">
                                <a href="#" class="link-underline link-underline-opacity-0 me-2">
                                    <font-awesome-icon icon="fa-bed" size="lg" /> 4 quartos
                                </a>
                                <a href="#" class="link-underline link-underline-opacity-0 me-2">
                                    <font-awesome-icon icon="shower" size="lg" /> 5 banheiros
                                </a>
                                <a href="#" class="link-underline link-underline-opacity-0">
                                    <font-awesome-icon icon="car-side" size="lg" /> 2 vagas
                                </a>
                            </div>
                            <a href="#" class="btn btn-primary text-light">Confira</a>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card shadow-lg">
                        <img src="../assets/catalog/casa-03.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title mt-3">DUPLEX</h5>
                            <p class="card-text lead">Ponto Chic</p>
                            <div class="mb-3">
                                <a href="#" class="link-underline link-underline-opacity-0 me-2">
                                    <font-awesome-icon icon="fa-bed" size="lg" /> 4 quartos
                                </a>
                                <a href="#" class="link-underline link-underline-opacity-0 me-2">
                                    <font-awesome-icon icon="shower" size="lg" /> 4 banheiros
                                </a>
                                <a href="#" class="link-underline link-underline-opacity-0">
                                    <font-awesome-icon icon="car-side" size="lg" /> 4 vagas
                                </a>
                            </div>
                            <a href="#" class="btn btn-primary text-light">Confira</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </main>
</template>


<script>
export default {
    name: 'CatalogPage'
}
</script>

<style scoped>
.circle-border {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #000;
}
</style>