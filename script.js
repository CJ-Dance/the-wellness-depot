/* --- Wellness on Wheels Section --- */
.wheels-highlight {
    background-color: var(--white);
}

.wheels-box {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
    background: var(--cream);
    padding: 4rem;
    border-radius: 30px;
}

.check-list {
    list-style: none;
    margin-top: 1.5rem;
}

.check-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: var(--dark);
}

.check-list i {
    color: var(--orange);
}

.img-placeholder-van {
    width: 100%;
    height: 350px;
    background: url('https://images.unsplash.com/photo-1589405709100-ca988530b41c?auto=format&fit=crop&q=80&w=1000') center/cover;
    border-radius: 20px;
    box-shadow: 20px 20px 0 var(--orange);
}

@media (max-width: 992px) {
    .wheels-box {
        grid-template-columns: 1fr;
        padding: 2rem;
    }
    
    .img-placeholder-van {
        box-shadow: 10px 10px 0 var(--orange);
    }
}
