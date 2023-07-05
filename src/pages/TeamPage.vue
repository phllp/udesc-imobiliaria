<template>
    <main class="bg-dark">
import TeamCard from '@/components/TeamCard.vue';
        <div class="container">
            <div class="row text-start g-1 py-5 justify-content-between">
                <div class="col-md-3">
                    <h1 class="display-2 border-start border-3 border-light text-light text-start ps-3">Conheça a nossa equipe:
                    </h1>
                </div>
                <div class="col-md-4">
                    <TeamCard :nome="'John Doe'" :cargo="'Gerente Administrativo'" :userPicture="caminhoImagem1" :bg="'bg-primary'"/>
                    <TeamCard :nome="'Eleanor Rigby'" :cargo="'Corretor de Imóveis'" :userPicture="caminhoImagem2" :bg="'bg-info'"/>
                </div>
                <div class="col-md-4">
                    <TeamCard :nome="'Rose Marx'" :cargo="'Gerente Comercial'" :userPicture="caminhoImagem4" :bg="'bg-info'"/> 
                    <TeamCard :nome="'Tyler Durden'" :cargo="'Corretor de Imóveis'" :userPicture="caminhoImagem3" :bg="'bg-primary'"/>

                </div>
            </div>
        </div>
    </main>
</template>

<script>
import TeamCard from '@/components/TeamCard.vue'

export default {
    name: "TeamPage",
    components: {
        TeamCard
    },
    data() {
        return {
            caminhoImagem1: require('../assets/team/person-man-01.jpg'),
            caminhoImagem2: require('../assets/team/person-woman-01.jpg'),
            caminhoImagem3: require('../assets/team/person-man-02.jpg'),
            caminhoImagem4: require('../assets/team/person-woman-02.jpg')
        }
    }
}
</script>