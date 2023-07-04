<template>
    <main>
        <div class="container">
            <div class="py-5">
                <h1 class="display-4 border-start border-3 border-dark ps-3">Entre em Contato Conosco</h1>
            </div>

            <form>


                <label for="email" class="form-label">Email</label>

                <div class="input-group mb-4">
                    <span class="input-group-text">
                        <i class="bi bi-envelope-fill"></i>
                    </span>
                    <input id="email" placeholder="seu.email@mail.com" type="email" class="form-control">

                    <span class="input-group-text">
                        <span class="tt" data-bs-placement="bottom" title="Vamos usar esse email para responder você">
                            <i class="bi-question-circle text-muted"></i>
                        </span>
                    </span>

                </div>

                <label for="name" class="form-label">Nome</label>

                <div class="input-group mb-4">

                    <span class="input-group-text">
                        <i class="bi bi-person-fill"></i>
                    </span>
                    <input id="name" placeholder="e.g. Mario" type="text" class="form-control">

                    <span class="input-group-text">
                        <span class="tt" data-bs-placement="bottom" title="Como devemos nos referir a você">
                            <i class="bi-question-circle text-muted"></i>
                        </span>
                    </span>
                </div>

                <label for="subject" class="form-label">Qual é o motivo do seu contato?</label>

                <div class="input-group mb-4">
                    <span class="input-group-text">
                        <i class="bi bi-chat-right-dots-fill"></i>
                    </span>
                    <select id="subject" class="form-select">

                        <option value="alugar">Alugar/Comprar Imóvel</option>
                        <option value="vender">Pôr Imóvel a Vambienteenda</option>
                        <option value="outro">Outro Assunto</option>

                    </select>

                </div>


                <div class="form-floating mt-4 my-5">
                    <textarea id="query" class="form-control" style="height: 200px"></textarea>
                    <label for="query">O que você deseja falar...</label>
                </div>

                <div class="mb-4 text-center">
                    <button class="btn btn-secondary btn-lg" type="submit">Enviar</button>
                </div>

            </form>

        </div>
    </main>
</template>


<script>
import {Tooltip} from 'bootstrap';
export default {
    name: 'ContactPage',
    mounted() {
    this.$nextTick(() => {
        const tooltips = document.querySelectorAll('.tt')
        tooltips.forEach(t => {
            new Tooltip(t)
        })
    });
  },
}



</script>