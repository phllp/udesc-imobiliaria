<template>
    <div class="position-relative mb-4">
        <img :src="userPicture" alt="" class="img-fluid">
        <div class="position-absolute end-70 bottom-0" :class="bg">
            <div class="ms-3 mt-3 px-5 d-none d-lg-block d-sm-block">
                <p class="fs-4 text-light m-0">{{nome}}</p>
                <p class="mb-2 fs-5 text-light">{{ cargo }}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'TeamCard',
    props: {
        nome: {
            type: String,
            default() {
                return 'Nome Genérico'
            },
        },
        userPicture: {
            type: String,
            default() {
                return ''
            },
        },
        bg: {
            type: String,
            default() {
                return ''
            },
        },
        cargo: {
            type: String,
            default() {
                return ''
            },
        }
    }
}
        
</script>