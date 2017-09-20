window.onload = function() {
    Particles.init({
        selector: '.background',
        color: '#ffffff',
        maxParticles: 80,
        connectParticles: true,
        responsive: [
        {
            breakpoint: 768,
            options: {
            maxParticles: 80
            }
        }, {
            breakpoint: 375,
            options: {
            maxParticles: 50
            }
        }
        ]
    });
};

$('#next').click(function() {
    $('.first-step').toggleClass('hidden');
    $('.second-step').toggleClass('hidden');
});