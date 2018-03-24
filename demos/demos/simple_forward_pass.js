/*
 - make sure fake y != actual y
 - act layer in last layer?
 - reformat text

*/

i18next.init({
	lng: 'en',
	debug: true,
	resources: {
		en: {
			translation: {
				"segment0": 'Suppose we have a dataset with one point: \
				$$x=\\begin{bmatrix} {{in0}} & {{in1}} & {{in2}} \\end{bmatrix} \\qquad y={{y}}$$\
				We can attempt to fit a 3x2x1 neural network with sigmoid activation functions, as seen below.',
				"segment1": '\
				Let\'s try a set of random weights and biases. For the first hidden layer, let\'s say our weights and biases are: \
				$$w=\\begin{bmatrix} {{in0}} & {{in1}} & {{in2}} \\\\ {{in3}} & {{in4}} & {{in5}} \\end{bmatrix} \\qquad b=\\begin{bmatrix} {{in6}} & {{in7}} \\end{bmatrix} $$',
				"segment2": '\
				And for the output layer, let\'s say the weights are: \
				$$ \
				w=\\begin{bmatrix} \
				{{in0}} & {{in1}} \
				\\end{bmatrix} \
				$$\
				And we let the final output neuron\'s bias be $b={{in2}}$',
				"segment3": '\
				Let\'s input our datapoint $x=\\begin{bmatrix}{{in0}} & {{in1}} & {{in2}}\\end{bmatrix}$ and see what output the network gives us.',
				"segment4": '\
				The output of the first (top-most in the graphic) hidden unit is: \
				$$ z = ({{in0}} \\cdot {{in1}}) + ({{in2}} \\cdot {{in3}}) + ({{in4}} \\cdot {{in5}}) + {{in6}} = {{in7}} $$ \
				$$ \\sigma({{in8}}) = {{in9}} $$',
				"segment5": '\
				The output of the second hidden unit is: \
				$$ z = ({{in0}} \\cdot {{in1}}) + ({{in2}} \\cdot {{in3}}) + ({{in4}} \\cdot {{in5}}) + {{in6}} = {{in7}} $$ \
				$$ \\sigma({{in8}}) = {{in9}} $$',
				"segment6": '\
				Now we take these and feed it into the output unit: \
				$$ z = ({{in0}} \\cdot {{in1}}) + ({{in2}} \\cdot {{in3}}) + {{in4}} = {{in5}} $$ \
				$$ \\sigma({{in6}}) = {{in7}} $$',
				"segment7": '\
				Not quite right (we wanted to get ${{in0}}$)...we can measure our error with the mean squared error (MSE), which is the most common measurement for error in regression problems: \
				$$ \
				\\begin{aligned} \
				\\text{mse} &= ({{in1}} - {{in2}})^2 \\\\ \
				\\text{mse} &= {{in3}} \
				\\end{aligned} \
				$$',
				"segment8": '\
				Now I\'ll magically give you the best set of weights. For the hidden layer: \
				$$ \
				w=\\begin{bmatrix} \
				{{in0}} & {{in1}} & {{in2}} \\\\ \
				{{in3}} & {{in4}} & {{in5}} \
				\\end{bmatrix} \\qquad b=\\begin{bmatrix}{{in6}}  {{in7}}\\end{bmatrix}\
				$$ \
				And for the output layer: \
				$$ \
				w=\\begin{bmatrix} \
				{{in8}} & {{in9}} \
				\\end{bmatrix} \\qquad b={{in10}} \
				$$',
				"segment9": '\
				Let\'s try this all again with these new weights: \
				$$ \
				\\begin{aligned} \
				\\text{hidden unit 1} &= \\sigma(({{in0}} * {{in1}}) + ({{in2}} * {{in3}}) + ({{in4}} * {{in5}}) + {{in6}}) = {{in7}} \\\\ \
				\\text{hidden unit 2} &= \\sigma(({{in8}} * {{in9}}) + ({{in10}} * {{in11}}) + ({{in12}} * {{in13}}) + {{in14}}) = {{in15}} \\\\ \
				\\text{output} &= \\sigma(({{in16}} * {{in17}}) + ({{in18}} * {{in19}}) + {{in20}}) = {{in21}} \
				\\end{aligned} \
				$$',
				"segment10": '\
				Voilà! We got the answer we wanted - so the weights of the network effectively control what it outputs.'
			}
		},
		fr: {
			translation: {
				"segment0": "Supposons que nous ayons un ensemble de données avec un point: \
				$$x=\\begin{bmatrix} {{in0}} & {{in1}} & {{in2}} \\end{bmatrix} \\qquad y={{y}}$$\
				Nous pouvons essayer d'adapter un réseau neuronal 3x2x1 avec des fonctions d'activation sigmoïde, comme on le voit ci-dessous.",
				"segment1": '\
				Essayons un ensemble de poids et de biais aléatoires. Pour la première couche cachée, disons que nos poids et biais sont: \
				$$w=\\begin{bmatrix} {{in0}} & {{in1}} & {{in2}} \\\\ {{in3}} & {{in4}} & {{in5}} \\end{bmatrix} \\qquad b=\\begin{bmatrix} {{in6}} & {{in7}} \\end{bmatrix} $$',
				"segment2": '\
				Et pour la couche de sortie, disons que les poids sont: \
				$$ \
				w=\\begin{bmatrix} \
				{{in0}} & {{in1}} \
				\\end{bmatrix} \
				$$\
				Et nous laissons le biais du neurone de sortie final être $b={{in2}}$',
				"segment3": '\
				Laissons entrer notre datapoint $x=\\begin{bmatrix}{{in0}} & {{in1}} & {{in2}}\\end{bmatrix}$ et voyons quelle sortie le réseau nous donne.',
				"segment4": '\
				La sortie de la première unité cachée (la plus haute dans le graphique) est: \
				$$ z = ({{in0}} \\cdot {{in1}}) + ({{in2}} \\cdot {{in3}}) + ({{in4}} \\cdot {{in5}}) + {{in6}} = {{in7}} $$ \
				$$ \\sigma({{in8}}) = {{in9}} $$',
				"segment5": '\
				La sortie de la deuxième unité cachée est: \
				$$ z = ({{in0}} \\cdot {{in1}}) + ({{in2}} \\cdot {{in3}}) + ({{in4}} \\cdot {{in5}}) + {{in6}} = {{in7}} $$ \
				$$ \\sigma({{in8}}) = {{in9}} $$',
				"segment6": '\
				Maintenant, nous les prenons et les introduisons dans l\'unité de sortie: \
				$$ z = ({{in0}} \\cdot {{in1}}) + ({{in2}} \\cdot {{in3}}) + {{in4}} = {{in5}} $$ \
				$$ \\sigma({{in6}}) = {{in7}} $$',
				"segment7": '\
				Pas tout à fait raison (nous voulions obtenir ${{in0}}$) ... nous pouvons mesurer notre erreur avec l\'erreur quadratique moyenne (MSE), qui est la mesure la plus courante d\'erreur dans les problèmes de régression: \
				$$ \
				\\begin{aligned} \
				\\text{mse} &= ({{in1}} - {{in2}})^2 \\\\ \
				\\text{mse} &= {{in3}} \
				\\end{aligned} \
				$$',
				"segment8": '\
				Maintenant, je vais vous donner magiquement le meilleur ensemble de poids. Pour la couche cachée: \
				$$ \
				w=\\begin{bmatrix} \
				{{in0}} & {{in1}} & {{in2}} \\\\ \
				{{in3}} & {{in4}} & {{in5}} \
				\\end{bmatrix} \\qquad b=\\begin{bmatrix}{{in6}}  {{in7}}\\end{bmatrix}\
				$$ \
				Et pour la couche de sortie: \
				$$ \
				w=\\begin{bmatrix} \
				{{in8}} & {{in9}} \
				\\end{bmatrix} \\qquad b={{in10}} \
				$$',
				"segment9": '\
				Essayons tout cela avec ces nouveaux poids: \
				$$ \
				\\begin{aligned} \
				\\text{hidden unit 1} &= \\sigma(({{in0}} * {{in1}}) + ({{in2}} * {{in3}}) + ({{in4}} * {{in5}}) + {{in6}}) = {{in7}} \\\\ \
				\\text{hidden unit 2} &= \\sigma(({{in8}} * {{in9}}) + ({{in10}} * {{in11}}) + ({{in12}} * {{in13}}) + {{in14}}) = {{in15}} \\\\ \
				\\text{output} &= \\sigma(({{in16}} * {{in17}}) + ({{in18}} * {{in19}}) + {{in20}}) = {{in21}} \
				\\end{aligned} \
				$$',
				"segment10": '\
				Voilà! Nous avons eu la réponse que nous voulions - ainsi les poids du réseau contrôlent efficacement ce qu\'il produit.'
			}
		}
	}
}, function(err, t) {
	// init set content
	// updateContent();
});

function demo(parent, width, height)
{
	// setup canvas
	var canvas = parent.canvas;
	var ctx = canvas.getContext('2d');
	
	// settings
	var c1 = 'rgba(0,0,0,0.7)';
	var c2 = 'rgba(0,0,0,1.0)';
	var t1 = 1.5;
	var t2 = 3;	

	var settings = {
	    context: ctx,
	    width: 700, 
	    height: 480,
	    architecture: [3, 2, 1],
	    visible: [3, 2, 1],
	    neuronStyle: {
	        color: c2,
	        thickness: t1,
	        radius: 50,
	        labelSize: 32,
	        biasLabelSize: 16,
	        labelText: ''
	    },
	    connectionStyle: {
	        color: c1,
	        arrowLen: 12,
	        arrowWidth: 5,
	        thickness: t1,
	        labelSize: 16,
	        labelLerp: 0.02,
	        labelText: ''
	    }
	};

	function forward_pass(use_correct_weights) {
		if (use_correct_weights) {
	    	weights = correct_weights
	    	biases = correct_biases
	    } else {
			weights = [[...Array(3).keys()].map(i => [...Array(2).keys()].map(i => Math.round(-10+20*Math.random())/10)), [...Array(2).keys()].map(i => [...Array(1).keys()].map(i => Math.round(-10+20*Math.random())/10))];
	    	biases = [[...Array(3).keys()].map(i => Math.round(-10+20*Math.random())/10), [...Array(2).keys()].map(i => Math.round(-10+20*Math.random())/10), [...Array(1).keys()].map(i => Math.round(-10+20*Math.random())/10)];
	    }
	    acts = [...Array(a.length).keys()].map(i => [...Array(a[i]).keys()].map(k => 0));
	    z = [...Array(a.length).keys()].map(i => [...Array(a[i]).keys()].map(k => 0));
	    acts[0] = input;
	    for (var l=1; l<a.length; l++) {
	        for (var n=0; n<acts[l].length; n++) {
	            z[l][n] = 0;
	            for (var n1=0; n1<acts[l-1].length; n1++) {
	                z[l][n] += weights[l-1][n1][n] * acts[l-1][n1];
	            }
	            z[l][n] += biases[l][n];
	            z[l][n] = Math.round(100.0*z[l][n])/100; // round
	            acts[l][n] = 1.0 / (1.0 + Math.exp(-z[l][n])); // sigmoid
	            acts[l][n] = Math.round(100.0*acts[l][n])/100; // round
	        }
	    }
	};

	// simulate neural net
	function initialize_network() {
	    a = settings.architecture;
	    input = [Math.round(30.0*Math.random())/10, Math.round(30*Math.random())/10, Math.round(30*Math.random())/10];
	    correct_weights = [[...Array(3).keys()].map(i => [...Array(2).keys()].map(i => Math.round(-10+20*Math.random())/10)), [...Array(2).keys()].map(i => [...Array(1).keys()].map(i => Math.round(-10+20*Math.random())/10))]
	    correct_biases = [[...Array(3).keys()].map(i => Math.round(-10+20*Math.random())/10), [...Array(2).keys()].map(i => Math.round(-10+20*Math.random())/10), [...Array(1).keys()].map(i => Math.round(-10+20*Math.random())/10)]
		forward_pass(true);
	    y_correct = Math.round(100.0*acts[acts.length-1][0])/100;
	};

	function get_mse(x1, x2) {
		return (x2-x1)*(x2-x1);
	};

	// create visualization
	var idx = -1;
	var a, inputs, correct_weights, correct_biases, y_correct;
	var weights, biases, acts, z;
	var net = new NetworkVisualization(settings);
	net.setHeightBounds([0.07,0.93],1);

	// initialize
	initialize_network();

	// convenience function for steps below
	function set_all_weights_and_labels_visible(){
	    for (var l=1; l<a.length; l++) {
	        for (var n=0; n<a[l]; n++) {
	            net.setNeuronStyle({
	                biasLabelText: 'b = '+biases[l][n].toFixed(1),
	                biasLabelColor: c1}, l, n);
	        }
	    }
	    for (var l=0; l<a.length-1; l++) {
	        for (var n1=0; n1<weights[l].length; n1++) {        
	            for (var n2=0; n2<weights[l][n1].length; n2++) {
	                net.setConnectionStyle({labelText: 'w = '+weights[l][n1][n2].toFixed(1)}, l, n1, n2);
	            }
	        }
	    }
	};

	function display_hidden_calculation(l, n) {
	    net.setNeuronStyle({
            color: c1,
            thickness: t1});
        net.setConnectionStyle({
            labelText:'', 
            color: c1,
            thickness: t1});
        net.setNeuronStyle({
            labelText: acts[l][n].toFixed(2), 
            color: c2,
            thickness: t2}, l, n);
        for (var n2=0; n2<acts[l-1].length; n2++){
            net.setNeuronStyle({
                color: c2,
                thickness: t2}, l-1, n2);
            net.setConnectionStyle({
                labelText:'w = '+weights[l-1][n2][n].toFixed(1), 
                color: c2,
                thickness: t2}, l-1, n2, n);
        }
	};

	function display_everything() {
		net.setNeuronStyle({
            color: c1,
            thickness: t1});
		for (var l=0; l<a.length; l++) {
		    for (var n=0; n<a[l]; n++) {
		    	net.setNeuronStyle({
	                labelText: acts[l][n].toFixed(2), 
	                color: c2,
	                thickness: t2}, l, n);
		    	if (l>0) {
		            for (var n2=0; n2<acts[l-1].length; n2++){
		                net.setNeuronStyle({
		                    color: c2,
		                    thickness: t2}, l-1, n2);
		                net.setConnectionStyle({
		                    labelText:'w = '+weights[l-1][n2][n].toFixed(1), 
		                    color: c2,
		                    thickness: t2}, l-1, n2, n);
		            }
		        }
	        }
		}
	};

	function display_values_layer1() {
		net.setNeuronStyle({labelText:'', thickness: t1});
	    net.setConnectionStyle({thickness: t1});
        for (var n=0; n<a[1]; n++) {
            net.setNeuronStyle({
                biasLabelText: 'b = '+biases[1][n].toFixed(1),
                biasLabelColor: c1}, 1, n);
        }
        for (var n1=0; n1<weights[0].length; n1++) {        
            for (var n2=0; n2<weights[0][n1].length; n2++) {
                net.setConnectionStyle({labelText: 'w = '+weights[0][n1][n2].toFixed(1)}, 0, n1, n2);
            }
        }
    };

	function display_values_layer2() {
		net.setNeuronStyle({labelText:'', thickness: t1});
	    net.setConnectionStyle({thickness: t1});
        net.setNeuronStyle({
            biasLabelText: 'b = '+biases[2][0].toFixed(1),
            biasLabelColor: c1}, 2, 0);
        net.setConnectionStyle({labelText: 'w = '+weights[1][0][0].toFixed(1)}, 1, 0, 0);
        net.setConnectionStyle({labelText: 'w = '+weights[1][1][0].toFixed(1)}, 1, 1, 0);
    };

	// animation steps
	var steps = [];
	
	// segment 0 
	steps.push({
		action: function(){
			acts[2][0] = y_correct;
			while (get_mse(acts[2][0], y_correct) < 0.1) {	// make sure to pick weights whose forward pass is actually sufficiently incorrect
				forward_pass(false);
			};
			set_text_panel(parent.description_panel_div,
				i18next.t('segment0', {in0: input[0].toFixed(1), in1: input[1].toFixed(1), in2: input[2].toFixed(1), y: y_correct.toFixed(2)}),
				true);
		},
		draw: function() {},
	});

	// segment 1 (1 step): annotate all net labels
	steps.push({
		action: function(){
			set_text_panel(parent.description_panel_div,
				i18next.t('segment1', {in0: weights[0][0][0].toFixed(1), in1: weights[0][1][0].toFixed(1), in2: weights[0][2][0].toFixed(1),
					in3: weights[0][0][1].toFixed(1), in4: weights[0][1][1].toFixed(1), in5: weights[0][2][1].toFixed(1), in6: biases[1][0].toFixed(1), in7: biases[1][1].toFixed(1)}),
				true);
		},
		draw: function() {
		    display_values_layer1();
		}
	});

	steps.push({
		action: function() {
			set_text_panel(parent.description_panel_div,
				i18next.t('segment2', {in0: weights[1][0][0].toFixed(1), in1: weights[1][1][0].toFixed(1), in2: biases[2][0].toFixed(1)}),
				true);
		},
		draw: function() {
			display_values_layer2();
		}
	});

	steps.push({
		action: function() {
			set_text_panel(parent.description_panel_div,
				i18next.t('segment3', {in0: input[0].toFixed(1), in1: input[1].toFixed(1), in2: input[2].toFixed(1)}),
				true);
		},
		draw: function() {
			for (var n=0; n<acts[0].length; n++) {
		        net.setNeuronStyle({labelText: acts[0][n].toFixed(2)}, 0, n);
		    }
		}
	});

	steps.push({
		action: function() {
			set_text_panel(parent.description_panel_div,
				i18next.t('segment4', {in0: weights[0][0][0].toFixed(1), in1: input[0].toFixed(1), in2: weights[0][1][0].toFixed(1),
					in3: input[1].toFixed(1), in4: weights[0][2][0].toFixed(1), in5: input[2].toFixed(1),
					in6: biases[1][0].toFixed(1), in7: z[1][0].toFixed(1), in8: z[1][0].toFixed(1), in9: acts[1][0].toFixed(2)}),
				true);
		},
		draw: function() {
			display_hidden_calculation(1, 0);
		}
	});
	
	steps.push({
		action: function() {
			set_text_panel(parent.description_panel_div,
				i18next.t('segment5', {in0: weights[0][0][1].toFixed(1), in1: input[0].toFixed(1), in2: weights[0][1][1].toFixed(1),
					in3: input[1].toFixed(1), in4: weights[0][2][1].toFixed(1), in5: input[2].toFixed(1),
					in6: biases[1][1].toFixed(1), in7: z[1][1].toFixed(1), in8: z[1][1].toFixed(1), in9: acts[1][1].toFixed(2)}),
				true);
		},
		draw: function() {
			display_hidden_calculation(1, 1);
		}
	});
	
	steps.push({
		action: function() {
			set_text_panel(parent.description_panel_div,
				i18next.t('segment6', {in0: weights[1][0][0].toFixed(1), in1: acts[1][0].toFixed(2), in2: weights[1][1][0].toFixed(1),
					in3: acts[1][1].toFixed(2), in4: biases[2][0].toFixed(1), in5: z[2][0].toFixed(1),
					in6: z[2][0].toFixed(2), in7: acts[2][0].toFixed(2)}),
				true);
		},
		draw: function() {
			display_hidden_calculation(2, 0);
		}
	});
	
	steps.push({
		action: function() {
			var error = get_mse(acts[2][0],y_correct);
			set_text_panel(parent.description_panel_div,
				i18next.t('segment7', {in0: y_correct, in1: y_correct.toFixed(2), in2: acts[2][0].toFixed(2), in3: error.toFixed(3)}),
				true);
		},
		draw: function() {}
	});
	
	steps.push({
		action: function() {
			forward_pass(true);
			set_text_panel(parent.description_panel_div,
				i18next.t('segment8', {in0: weights[0][0][0].toFixed(1), in1: weights[0][1][0].toFixed(1), in2: weights[0][2][0].toFixed(1),
					in3: weights[0][0][1].toFixed(1), in4: weights[0][1][1].toFixed(1), in5: weights[0][2][1].toFixed(1),
					in6: biases[1][0], in7: biases[1][1], in8: weights[1][0][0].toFixed(1),
					in9: weights[1][1][0].toFixed(1), in10: biases[2][0].toFixed(1)}),
				true);
		},
		draw: function() {
			display_values_layer1();
			display_values_layer2();		
		}
	});

	steps.push({
		action: function() {
			set_text_panel(parent.description_panel_div,
				i18next.t('segment9', {in0: weights[0][0][0].toFixed(1), in1: input[0].toFixed(1), in2: weights[0][1][0].toFixed(1),
					in3: input[1].toFixed(1), in4: weights[0][2][0].toFixed(1), in5: input[2].toFixed(1),
					in6: biases[1][0].toFixed(1), in7: acts[1][0].toFixed(2), in8: weights[0][0][1].toFixed(1),
					in9: input[0].toFixed(1), in10: weights[0][1][1].toFixed(1), in11: input[1].toFixed(1),
					in12: weights[0][2][1].toFixed(1), in13: input[2].toFixed(1), in14: biases[1][1].toFixed(1),
					in15: acts[1][1].toFixed(2), in16: weights[1][0][0].toFixed(1), in17: acts[1][0].toFixed(2),
					in18: weights[1][1][0].toFixed(2), in19: acts[1][1].toFixed(2), in20: biases[2][0].toFixed(1),
					in21: acts[2][0].toFixed(2)}),
				true);
		},
		draw: function() {
			display_everything();
		}
	});

	steps.push({
		action: function() {
			set_text_panel(parent.description_panel_div,
				i18next.t('segment10'), true);
		},
		draw: function() {}
	});

	// control flow
	function prev() {
		if (idx > 0) {
		    idx--;
		    redraw();
		}
	};

	function next() {
		idx++;
		if (idx == steps.length) {
			idx = 0;
			initialize_network();
		}
	    redraw();
	};

	function redraw() {
		net.resetSettings();
		steps[idx].action();
		for (var i=0; i<=idx; i++) {
			steps[i].draw();
		}
	    //steps[idx]();
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    net.draw(7, 10);
	};
	
	// add control panels
	set_control_panel_height(parent.description_panel_div, 120);
	add_control_panel_action('prev', prev);
	add_control_panel_action('next', next);

	// start
	next();	
};
