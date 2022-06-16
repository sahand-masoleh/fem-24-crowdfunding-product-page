<script>
    // @ts-nocheck
    import '../styles/Nav.scss'
    import logo from '../assets/images/logo.svg'

    export let isOpen = false
    function toggleModal(){
        isOpen = isOpen ? false : true
    }

</script>

<nav class="nav">
    <img src={logo} alt="crowfund logo" class="nav__logo">
    <button class="nav__hamburger" on:click={toggleModal} data-open={isOpen}></button>
</nav>

{#if isOpen}
<div class="modal__bg" on:click={toggleModal}></div>
<div class="nav__modal modal" on:click={toggleModal}>
    <p class="nav__item">About</p>
    <hr class="nav__divider">
    <p class="nav__item">Discover</p>
    <hr class="nav__divider">
    <p class="nav__item">Get Started</p>
</div>
{/if}