<template>
    <div>     
        <div v-for="image in previousProjects" style="z-index:-100;">
            <div class="card">
            <img src="../assets/images/BespokeKitchen-01.jpg" :alt="image.alt" style="width:100%;">
            <h1>{{image.name}}</h1>
            <p>Some text about the item.
                  Lorem jeamsun denim lorem jeansum.</p>
                <p><button>Get a quote</button></p>
            </div>
        </div>        
    </div>
</template>

<script>
    export default {
        name: "Gallery",
        data() {
            return {
                previousProjects: [
                    {
                        source: 'BespokeKitchen-01.jpg',
                        alt: 'test',
                        name: 'Test'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        margin: auto;
        text-align: center;
        font-family: arial;
        }

        .price {
        color: grey;
        font-size: 22px;
        }

        .card button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
        }

        .card button:hover {
        opacity: 0.7;
        }
</style>