<script>
    // @ts-nocheck
    import logo from "../assets/images/logo-mastercraft.svg"
    import bookmarkIcon from '../assets/images/icon-bookmark.svg'
    import bookmarkDoneIcon from '../assets/images/icon-bookmark-done.svg'

    let isBookmarked = false;

    function bookmark(){
        isBookmarked = isBookmarked ? false : true
    }
</script>

<section class="main__intro card">
    <img src={logo} alt="mastercraft logo" class="card__logo">
    <h1 class="card__title">Mastercraft Bamboo Monitor Riser</h1>
    <p class="card__text">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
    <div class="card__container">
        <button class="main__back button">Back this project</button>
        <button class="main__bookmark button" on:click={bookmark}>
                <img src={isBookmarked ? bookmarkDoneIcon : bookmarkIcon} alt="">
        </button>
    </div>
</section>
