<?php

namespace App\Http\Controllers;

use App\Task;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Resources\TaskCollection;
use App\Repositories\TaskRepository;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * The task repository instance.
     * 
     * @var TaskRepository
     */
    //protected $tasks;

    /**
     * Create a new controller instance.
     * 
     * @param   TaskRepository  $tasks
     * @return  void
     */
    /*
    public function __construct(TaskRepository $tasks) {
        //$this->middleware('auth');
        $this->tasks = $tasks;
    }
    */

    /**
     * Display a list of all of the user's tasks.
     * 
     * @param   Request $request
     * @return  Response
     */
    function index(Request $request) {
        //return $this->tasks->forUser($request->user())->toJson();
        return new TaskCollection(Task::orderBy('created_at', 'asc')->get());
    }

    function show(int $id) {
        return Task::findOrFail($id);
    }

    /**
     * Create a new task.
     * 
     * @param   Request $request
     * @return  Response
     */
    function store(Request $request) {
        $this->validate($request, [
            'name' => 'required|max:255',
        ]);

        /*$task = $request->user()->tasks()->create([
            'name' => $request->name,
        ]);*/

        $task = new Task;
        $task->user_id = 1;
        $task->name = $request->name;
        $task->save();
    
        return $task->toJson();
    }

    /**
     * Destroy the given task.
     * 
     * @param   Request $request
     * @param   int     $id
     * @return  Response
     */
    function destroy(Request $request, int $id) {
        //$this->authorize('destroy', $task);

        Task::findOrFail($id)->delete();

        return "Task ".$id." has been deleted.";
    }
}
