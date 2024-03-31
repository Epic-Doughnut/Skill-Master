document.addEventListener('keydown', function (event)
{
    const key = event.key.toLowerCase();
    console.log("Key pressed: " + key);
    switch (key)
    {
        case 'c':
            navigateTo('character-info');
            break;
        case 's':
            navigateTo('skills');
            break;
        case 'e':
            navigateTo('equipment');
            break;
        case 'h':
            navigateTo('shops');
            break;
        case 'b':
            navigateTo('combat');
            break;
        case 'n':
            navigateTo('navigation');
            break;
        default:
            break;
    }
});


function navigateTo(sectionId)
{
    const section = document.querySelector(`.${sectionId}`);
    if (section)
    {
        if (section.style.display === 'none')
        {
            section.style.display = 'block';
        } else
        {
            section.style.display = 'none';
        }
    }
}

// Allow the toggle of the log
toggle_log_button = document.querySelector('.toggle-log-btn');
toggle_log_button.addEventListener('click', function ()
{
    const logBox = document.querySelector('.log-box');
    logBox.classList.toggle('shrunk');

    toggle_log_button.innerText = logBox.classList.contains("shrunk") ? "<<" : ">>";
});