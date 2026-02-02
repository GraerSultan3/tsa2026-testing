.timeline
{
    --border-color: red;
    --max-child-width: 20vw;

    display: flex;
    background-color: var(--blackish);
    flex-direction: column;
    row-gap: 0;
    padding: 2vw;
}
.timeline > *
{
    margin: 0;
    --height: 10vh;

    display: flex;
    padding: 2vh 0 3vw 3vw;
    align-items: flex-start;
    flex-direction: row;
    column-gap: 2vw;
    border-top: dashed var(--border-color) 0.5em;
    position: relative;

    flex-basis: 10vw;
}
.timeline > * > *::before
{
    content: "";
    --radius: 2vmin;
    position: absolute;
    bottom: calc(var(--height));
    height: var(--radius);
    width: var(--radius);
    border: solid 0.25vh #FFFFFF;
    border-radius: 50%;
    background-color: var(--border-color);
    filter: invert(76%);
}
.timeline > * > *
{
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: var(--max-child-width);
}
.timeline > :nth-of-type(odd)
{
    border-radius: 0 5vmin 3vmin 0;
    border-right: dashed var(--border-color) 0.5em;
}
.timeline > :nth-of-type(even)
{
    border-radius: 5vmin 0 0 3vmin;
    justify-content: flex-end;
    padding-right: 10vw;
    border-left: dashed var(--border-color) 0.5em;
}
.timeline:last-child
{
    border-left: none;
    border-right: none;
}
