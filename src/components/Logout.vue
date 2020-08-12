<template>
    
</template>

<script>
export default {
    created(){
        this.$store.dispatch("destroyToken");
        this.$router.push('/login');
    }    
}
</script>

<style scoped>

</style>