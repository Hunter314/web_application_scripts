function myMove() {
  var load_circle = document.createElement("DIV");
  load_circle.id = "loading-symbol";
  var container_elem = document.getElementById("container");
  document.body.appendChild(load_circle); 
  var elem = load_circle;
     
  var x_pos = 0;
  var y_pos = 0;
  
  var angle = 0;
  
  var move_radius = 100;
  var center = 200;
  var min_velocity = 0.005;
  var y_max = center + move_radius;
      
  var box_width = 400;
  var object_radius = 25;
  var id = setInterval(frame, 5);
  var stop_move = 0;
  var vel_multiplier = 0.125;
  
  function frame() {
    if (stop_move == 0) {
      clearInterval(id);
      load_circle.remove();
      angle = 0;
      stop_move = 1;
    } else {
    
      angle+=min_velocity;
      //
      y_pos = (center + Math.sin(angle) * move_radius); 
      x_pos = (center + Math.cos(angle) * move_radius); 
      //Using kinetic energy
      velocity = Math.sqrt(2 * 9.81 * (y_max)) - Math.sqrt(2 * 9.81 * (box_width-y_pos));
      // Angle equals a constant times the angular velocity (velocity divided by radius)
      angle+= (0.125 * velocity/move_radius);
      elem.style.top = y_pos - object_radius + "px";
      elem.style.left = x_pos - object_radius + "px";
    }
  }
}